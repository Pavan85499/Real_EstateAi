import Link from "next/link"
import { Building, ChevronRight, LineChart, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  AI-Powered Real Estate Intelligence
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Make smarter property decisions with our advanced AI valuation, market insights, and investment
                  analysis tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-primary">
                    Get Started
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <img
              alt="Real Estate Analytics Dashboard"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              src="/placeholder.svg?height=550&width=800"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powered by Advanced AI</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform leverages machine learning to provide accurate property valuations, market insights, and
                investment recommendations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <Building className="h-8 w-8 text-primary mb-2" />
                <CardTitle>AI Property Valuation</CardTitle>
                <CardDescription>
                  Get accurate property valuations based on thousands of market data points
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our AI analyzes comparable properties, market trends, and neighborhood data to provide precise
                  valuations.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/valuation" className="text-sm text-primary flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <LineChart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Market Insights</CardTitle>
                <CardDescription>Analyze market trends and forecast future property values</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visualize historical data and predictive analytics to understand market dynamics and make informed
                  decisions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/insights" className="text-sm text-primary flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-2">
                <TrendingUp className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Investment Analysis</CardTitle>
                <CardDescription>Optimize your investment strategy with AI-powered recommendations</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Calculate ROI, rental yields, and potential appreciation to identify the most profitable investment
                  opportunities.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/investment" className="text-sm text-primary flex items-center">
                  Learn more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our platform simplifies the property analysis process with three easy steps
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
              <h3 className="text-xl font-bold">Input Property Details</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Enter the property address and basic information to get started
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
              <h3 className="text-xl font-bold">AI Analysis</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Our AI processes the data and generates comprehensive insights
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
              <h3 className="text-xl font-bold">Make Informed Decisions</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                Use the insights to optimize your real estate investments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Transform Your Real Estate Decisions?
              </h2>
              <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of investors who are leveraging AI to maximize their real estate returns
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary">
                  Get Started Now
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-white dark:bg-gray-950 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">PropAI</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                AI-powered real estate intelligence for smarter property decisions
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <h4 className="text-base font-medium">Company</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-medium">Resources</h4>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href="/blog"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-medium">Subscribe</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Stay updated with the latest real estate market insights
              </p>
              <form className="flex space-x-2">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 border-t pt-6">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} PropAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

