import { NextResponse } from 'next/server';

export async function GET() {
  const username = process.env.GITHUB_USERNAME;
  const token = process.env.GITHUB_ACCESS_TOKEN;

  if (!username || !token) {
    return NextResponse.json({ error: "Config missing" }, { status: 500 });
  }

  try {
    // 1. Tambahkan 'cache: no-store' agar data selalu paling baru
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, 
      {
        headers: { Authorization: `token ${token}` },
        cache: 'no-store' 
      }
    );

    const allRepos = await response.json();

    // 2. DEBUG: Cek di Terminal VS Code kamu!
    // Ini akan menampilkan semua repo dan jumlah bintangnya
    console.log("--- DEBUG REPOS ---");
    allRepos.forEach((r: any) => {
      console.log(`Repo: ${r.name} | Stars: ${r.stargazers_count} | Private: ${r.private}`);
    });

    // 3. Filter dengan lebih teliti
    // Pastikan kita mengambil repo milik sendiri (bukan fork) dan punya star
    const featuredRepos = allRepos.filter((repo: any) => {
      return repo.stargazers_count > 0;
    });

    return NextResponse.json(featuredRepos);

  } catch (error) {
    return NextResponse.json({ error: "Fetch error" }, { status: 500 });
  }
}