import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

/**
 * microCMS webhook target.
 * Set webhook URL to: https://www.alpha-kanko.com/api/revalidate?secret=YOUR_SECRET
 */
export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/works");
  revalidatePath("/");
  revalidatePath("/sitemap.xml");

  try {
    const body = (await request.json()) as { id?: string; slug?: string };
    if (body.slug) {
      revalidatePath(`/works/${body.slug}`);
    }
  } catch {
    // body optional
  }

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
