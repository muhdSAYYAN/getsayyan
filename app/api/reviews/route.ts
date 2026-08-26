import { NextResponse } from "next/server";

export const dynamic = "force-static";

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

export interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

export async function GET() {
  if (!GOOGLE_API_KEY || !PLACE_ID) {
    return NextResponse.json(
      { error: "Google Places API key or Place ID not configured." },
      { status: 500 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&key=${GOOGLE_API_KEY}`;

    const res = await fetch(url, {
      // Cache for 1 hour to avoid excessive API calls
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error(`Google API responded with ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== "OK") {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    const result = data.result;

    return NextResponse.json({
      businessName: result.name,
      overallRating: result.rating,
      totalReviews: result.user_ratings_total,
      reviews: (result.reviews || []) as GoogleReview[],
    });
  } catch (err) {
    console.error("Error fetching Google reviews:", err);
    return NextResponse.json(
      { error: "Failed to fetch reviews." },
      { status: 500 }
    );
  }
}
