import React from 'react';
import { Bot, Search, ArrowRight, Shield, Clock, DollarSign } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <div className="mint-gradient">
        <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <Bot className="h-8 w-8 text-mint-dark" />
                <span className="ml-2 text-xl font-bold text-gray-900">AI Based Lead Qualification</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                  Login
                </button>
                <button className="bg-gray-100 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-6xl font-bold text-gray-900 mb-6">
                  Never Speak to Unqualified Leads Again
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-lg">
                  Transform your sales process with advanced AI-powered lead qualification. 
                  Our intelligent system screens prospects automatically, ensuring you only 
                  invest time in qualified leads ready to convert.
                </p>
                <div className="flex gap-4">
                  <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center text-lg font-semibold">
                    Find Out More <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg font-semibold">
                    Watch Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 card-shadow">
                  <div className="flex items-center mb-4">
                    <Bot className="h-6 w-6 text-mint-dark mr-2" />
                    <div className="text-sm text-gray-500">AI Lead Qualification Benefits</div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                      <span className="font-medium">Intelligent Lead Screening</span>
                      <Shield className="h-6 w-6 text-mint-dark" />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                      <span className="font-medium">Save 12+ hours weekly</span>
                      <Clock className="h-6 w-6 text-mint-dark" />
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
                      <span className="font-medium">10x your ROI</span>
                      <DollarSign className="h-6 w-6 text-mint-dark" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How AI Based Lead Qualification Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our advanced AI platform automatically evaluates and qualifies leads before they reach your calendar,
              saving your team valuable time and resources.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <Shield className="h-12 w-12 text-mint-dark mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Intelligent Screening</h3>
              <p className="text-gray-600">
                Our AI technology evaluates leads against your ideal customer profile,
                ensuring only qualified prospects reach your sales team.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <Clock className="h-12 w-12 text-mint-dark mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Time Optimization</h3>
              <p className="text-gray-600">
                Eliminate time wasted on unqualified leads. Our AI qualification process
                ensures you focus only on prospects ready to convert.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <DollarSign className="h-12 w-12 text-mint-dark mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Increased Conversion</h3>
              <p className="text-gray-600">
                AI-qualified leads convert at higher rates, delivering better ROI
                and more revenue for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mint-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-16 rounded-2xl card-shadow text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Your Sales Process with AI Based Lead Qualification
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful sales teams who've optimized their pipeline
              with our AI-powered lead qualification system.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors flex items-center text-lg font-semibold mx-auto">
              Start Qualifying Leads Now <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-gray-900">AI Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-gray-900">About</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
                <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 AI Based Lead Qualification. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
