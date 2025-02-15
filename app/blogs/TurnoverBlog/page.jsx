import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Calendar, TrendingUp, Target, ArrowUpRight, Globe2 } from 'lucide-react';

export default function FinancialBlogPost() {
  return (
    <article className="min-h-screen ">
      {/* Blog Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-6 text-blue-100">
            <Building2 className="h-5 w-5" />
            <span className="text-sm">Company Analysis</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Realcade Lifescience: A Decade of Pharmaceutical Excellence
          </h1>
          <div className="flex items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Published May 15, 2023</span>
            </div>
            <span className="text-sm">10 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 max-w-4xl py-12">
        {/* Article Introduction */}
        <div className="prose max-w-none mb-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Realcade Lifescience Private Limited, established in 2012 and headquartered in Kadi-Mehsana, Gujarat,
            has solidified its position as a leading manufacturer of sterile liquid parenterals utilizing advanced
            Aseptic Form-Fill-Seal (FFS) technology. The fiscal year 2022-2023 marked a period of significant
            financial growth and strategic advancements for the company.
          </p>
        </div>

        {/* Key Financial Metrics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Financial Performance Overview</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">Total Operating Income</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-blue-600">₹102.38 Cr</span>
                      <span className="text-green-600 text-sm font-medium">↑ 11.15%</span>
                    </div>
                    <p className="text-gray-600   dark:text-gray-300 text-sm mt-2">Previous Year: ₹92.10 Cr</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <ArrowUpRight className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">PBILDT</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-green-600">₹14.62 Cr</span>
                      <span className="text-green-600 text-sm font-medium">↑ 10.67%</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-2  dark:text-gray-300">Previous Year: ₹13.21 Cr</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="prose max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-6">
              The company demonstrated remarkable financial improvements in the fiscal year ending March 31, 2023.
              A significant highlight was the transition from a net loss of ₹2.70 crore in 2021 to a net profit
              of ₹0.53 crore in 2022, underscoring enhanced operational efficiency and market positioning.
            </p>
            <p>
              Furthermore, the company&#39;s net worth experienced a substantial growth of 25.45%, indicating a robust
              financial foundation and effective management practices.
            </p>
          </div>
        </section>

        {/* Strategic Initiatives */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Strategic Initiatives and Operational Highlights</h2>
          <div className="prose max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-8">
              Realcade Lifescience&#39;s growth trajectory can be attributed to several strategic and operational
              initiatives that have positioned the company for sustained success in the pharmaceutical sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Technological Advancements</h3>
                <p className="text-gray-600 ">
                  Investment in state-of-the-art Aseptic Form-Fill-Seal (FFS) technology, enhancing sterility
                  and safety of large-volume parenteral solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800">Product Portfolio Expansion</h3>
                <p className="text-gray-600 ">
                  Broadened range of sterile liquid solutions, effectively meeting diverse medical needs and
                  catering to a wider patient demographic.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Corporate Governance */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Corporate Governance and Leadership</h2>
          <div className="prose max-w-none text-gray-600 dark:text-gray-300">
            <p className="mb-6">
              The company&#39;s leadership comprises experienced professionals dedicated to steering Realcade towards
              sustained growth and innovation. The board includes directors such as Bharatkumar Baluji Vihol and
              Rahulkumar Mahendrabhai Patel, whose combined expertise has been instrumental in navigating the
              company through industry challenges and opportunities.
            </p>
          </div>
        </section>

        {/* Future Outlook */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Future Outlook</h2>
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Innovation</h3>
                  <p className="text-gray-600 ">
                    Investing in research and development to introduce new and improved sterile liquid formulations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Sustainability</h3>
                  <p className="text-gray-600 ">
                    Implementing eco-friendly manufacturing practices to minimize environmental impact.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-3 text-blue-800">Global Expansion</h3>
                  <p className="text-gray-600 ">
                    Exploring opportunities to enter new international markets and broaden global footprint.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Conclusion */}
        <section>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Summary</h2>
              <p className="text-lg leading-relaxed">
                The fiscal year 2022-2023 has been a landmark period for Realcade Lifescience Private Limited,
                characterized by financial robustness, strategic growth, and a commitment to excellence in the
                pharmaceutical manufacturing sector. With strong leadership, technological innovation, and a
                clear vision for the future, the company is well-positioned for continued success.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </article>
  );
}