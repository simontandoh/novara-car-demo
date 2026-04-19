import { NextResponse } from "next/server";

const FIELD_REQUIREMENTS = {
  "book-assessment": ["full_name", "email", "phone"],
  "boutique-appointment": ["full_name", "email", "phone", "enquiry_type"],
  "table-reservation": ["name", "email", "phone", "party_size"],
  "table-booking": ["name", "email", "phone", "party_size"],
  "creator-collaboration": ["full_name", "brand_company", "email", "budget_range", "message"],
  "nail-appointment": ["full_name", "email", "phone", "treatment", "preferred_date", "preferred_time"],
  "photographer-enquiry": ["name", "email", "phone", "shoot_type", "date", "location", "message"],
  "football-trial-request": ["name", "age", "position", "email", "message"],
  "law-consultation": ["name", "email", "phone", "case_type", "message"],
  "plumbing-contact": ["full_name", "phone", "email", "service", "postcode", "message"],
  "ironside-enquiry": ["full_name", "phone", "email", "service", "postcode", "message"],
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const formData = await request.formData();
  const formName = String(formData.get("form-name") ?? formData.get("name") ?? "").trim();

  const required =
    FIELD_REQUIREMENTS[formName as keyof typeof FIELD_REQUIREMENTS] ?? ["email", "message"];

  const missing = required.filter((field) => {
    const value = formData.get(field);
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields", fields: missing },
      { status: 400 },
    );
  }

  const emailValue = String(formData.get("email") ?? "").trim();
  if (!EMAIL_PATTERN.test(emailValue)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address", fields: ["email"] },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true, message: "Form submitted successfully" });
}