import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { LawFooterSimple } from "@/components/law/law-footer-simple";
import { LawNav } from "@/components/law/law-nav";
import "@/styles/pages/services.css";

export const metadata: Metadata = {
  title: "Hale & Partners — Services",
};

export default function ServicesPage() {
  return (
    <div className="law-services">
      <LawNav active="services" ctaHref="/contact" />

      <div className="page-header">
        <Image
          className="ph-bg"
          src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1600&q=80&fit=crop"
          alt="Law"
          fill
          sizes="100vw"
        />
        <div className="ph-content">
          <p className="ph-eyebrow">Practice Areas</p>
          <h1 className="ph-title">
            Our
            <br />
            Services
          </h1>
          <p className="ph-sub">
            From employment disputes to buying your first home, we have
            specialists across all the areas that matter most to individuals and
            businesses.
          </p>
        </div>
      </div>

      <section className="services-detail">
        <div className="sd-inner">
          <div className="service-block">
            <Image
              className="sb-photo"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&fit=crop&crop=center"
              alt="Employment law"
              width={700}
              height={438}
            />
            <div className="sb-content">
              <div className="sb-num">01</div>
              <h2 className="sb-title">Employment Law</h2>
              <p className="sb-body">
                Workplace legal matters are often stressful and time-sensitive.
                Our employment team acts for both employees and employers,
                providing clear advice on rights, obligations, and the best path
                forward.
              </p>
              <ul className="sb-list">
                <li>Unfair and wrongful dismissal claims</li>
                <li>Discrimination and harassment</li>
                <li>Settlement agreements and negotiations</li>
                <li>TUPE transfers and redundancy</li>
                <li>Employment tribunal representation</li>
              </ul>
              <Link href="/contact" className="sb-cta">
                Book a consultation →
              </Link>
            </div>
          </div>

          <div className="service-block reverse">
            <Image
              className="sb-photo"
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80&fit=crop&crop=center"
              alt="Conveyancing"
              width={700}
              height={438}
            />
            <div className="sb-content">
              <div className="sb-num">02</div>
              <h2 className="sb-title">Conveyancing</h2>
              <p className="sb-body">
                Buying or selling a property is one of the biggest financial
                decisions you&apos;ll make. Our conveyancing team handles all the
                legal work with efficiency and transparency so you can focus on
                what matters.
              </p>
              <ul className="sb-list">
                <li>Residential purchases and sales</li>
                <li>Remortgage and transfer of equity</li>
                <li>New build purchases</li>
                <li>Leasehold and freehold transactions</li>
                <li>Help to Buy and shared ownership</li>
              </ul>
              <Link href="/contact" className="sb-cta">
                Get a fixed fee quote →
              </Link>
            </div>
          </div>

          <div className="service-block">
            <Image
              className="sb-photo"
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=700&q=80&fit=crop&crop=center"
              alt="Family law"
              width={700}
              height={438}
            />
            <div className="sb-content">
              <div className="sb-num">03</div>
              <h2 className="sb-title">Family Law</h2>
              <p className="sb-body">
                Family legal matters require sensitivity and precision. Our
                solicitors bring both — offering clear, honest advice while
                always keeping your and your family&apos;s long-term wellbeing at
                the centre.
              </p>
              <ul className="sb-list">
                <li>Divorce and judicial separation</li>
                <li>Financial settlements and consent orders</li>
                <li>Child arrangements and custody</li>
                <li>Cohabitation disputes</li>
                <li>Pre-nuptial and post-nuptial agreements</li>
              </ul>
              <Link href="/contact" className="sb-cta">
                Book a consultation →
              </Link>
            </div>
          </div>

          <div className="service-block reverse">
            <Image
              className="sb-photo"
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=700&q=80&fit=crop&crop=center"
              alt="Personal injury"
              width={700}
              height={438}
            />
            <div className="sb-content">
              <div className="sb-num">04</div>
              <h2 className="sb-title">Personal Injury</h2>
              <p className="sb-body">
                If you&apos;ve been injured through no fault of your own, you may
                be entitled to compensation. Our personal injury solicitors work
                on a no win, no fee basis — you pay nothing unless we win.
              </p>
              <ul className="sb-list">
                <li>Road traffic accidents</li>
                <li>Workplace and industrial injuries</li>
                <li>Slips, trips, and falls</li>
                <li>Medical negligence</li>
                <li>Criminal injuries compensation</li>
              </ul>
              <Link href="/contact" className="sb-cta">
                No win, no fee assessment →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-bar">
        <h2>Not sure which service you need?</h2>
        <p>
          Book a free 30-minute consultation and we&apos;ll tell you exactly
          where you stand and what your options are.
        </p>
        <Link href="/contact" className="btn-dark">
          Book Free Consultation
        </Link>
      </div>

      <LawFooterSimple />
    </div>
  );
}
