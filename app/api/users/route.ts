import { currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // Get the full user object
    const user = await currentUser();

    if (!user) {
      return NextResponse.json(
        {
          message: "No user found",
          user: null,
        },
        { status: 401 }
      );
    }

    // Extract user details
    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
      email: user.emailAddresses?.[0]?.emailAddress,
      username: user.username,
      imageUrl: user.imageUrl,
    };

    console.log("User data:", userData);

    return NextResponse.json({
      message: "User data retrieved successfully",
      user: userData,
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json(
      {
        message: "Error fetching user data",
        error: "",
      },
      { status: 500 }
    );
  }
}
