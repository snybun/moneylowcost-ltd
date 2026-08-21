import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ShieldCheck, 
  Lock, 
  Scale, 
  ExternalLink, 
  UserCheck, 
  CreditCard, 
  Eye, 
  RotateCcw, 
  PhoneCall, 
  Building2,
  AlertCircle
} from 'lucide-react';
import Container from '../components/Container';
import { ParallaxGlow } from '../components/Parallax';

const LEGAL_SECTIONS = [
  { id: 'sec-1', number: '01', title: 'General Terms', icon: FileText },
  { id: 'sec-2', number: '02', title: 'Intellectual Property', icon: ShieldCheck },
  { id: 'sec-3', number: '03', title: 'Disclaimer of Warranty', icon: Scale },
  { id: 'sec-4', number: '04', title: 'Limitation of Liability', icon: Lock },
  { id: 'sec-5', number: '05', title: 'Indemnification', icon: ShieldCheck },
  { id: 'sec-6', number: '06', title: 'Law and Jurisdiction', icon: Building2 },
  { id: 'sec-7', number: '07', title: 'Links to Third Party', icon: ExternalLink },
  { id: 'sec-8', number: '08', title: "Customer's Account", icon: UserCheck },
  { id: 'sec-9', number: '09', title: "Credit Policy", icon: CreditCard },
  { id: 'sec-10', number: '10', title: 'Privacy', icon: Eye },
  { id: 'sec-11', number: '11', title: 'Changes', icon: RotateCcw },
  { id: 'sec-12', number: '12', title: 'Contact Details', icon: PhoneCall },
];

export default function TermsSection() {
  const [activeTab, setActiveTab] = useState('sec-1');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const section of LEGAL_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="terms" className="bg-[#FFFFFF] py-20 md:py-28 border-b border-[#E5E5E7]">
      <Container>
        
        {/* Apple-Style Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-3">
            Company Official Policy
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">
            Terms & Conditions
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            Please read the following terms and conditions carefully before using this website and company services.
          </p>
        </motion.div>

        {/* Mobile Horizontal Navigation Bar */}
        <div className="lg:hidden mb-8 overflow-x-auto pb-2 flex items-center gap-2 no-scrollbar border-b border-[#E5E5E7]">
          {legalSections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-colors shrink-0 ${
                activeTab === sec.id
                  ? 'bg-[#0071E3] text-[#FFFFFF] shadow-xs'
                  : 'bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F]'
              }`}
            >
              {sec.number}. {sec.title}
            </button>
          ))}
        </div>

        {/* Desktop Sticky Layout: Left Sticky TOC (4 cols) + Right Legal Content (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Side: Desktop Sticky Table of Contents */}
          <div className="hidden lg:block lg:col-span-4 sticky top-28 space-y-1 bg-[#F5F5F7] border border-[#E5E5E7] p-4 rounded-3xl shadow-xs">
            <span className="text-[11px] font-bold tracking-widest text-[#6E6E73] uppercase block px-3 py-2">
              Document Index
            </span>
            <div className="space-y-0.5 max-h-[calc(100vh-200px)] overflow-y-auto pr-1">
              {legalSections.map((sec) => {
                const Icon = sec.icon;
                const isActive = activeTab === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-all duration-200 ${
                      isActive
                        ? 'bg-[#0071E3] text-[#FFFFFF] font-semibold shadow-sm'
                        : 'text-[#6E6E73] hover:bg-[#E5E5E7]/60 hover:text-[#1D1D1F]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#FFFFFF]' : 'text-[#6E6E73]'}`} />
                      <span className="truncate">{sec.title}</span>
                    </div>
                    <span className={`text-[10px] shrink-0 font-bold ${isActive ? 'text-[#FFFFFF]' : 'text-[#6E6E73]'}`}>
                      {sec.number}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Legal Document Content Container (#F5F5F7) */}
          <div className="lg:col-span-8 bg-[#F5F5F7] border border-[#E5E5E7] rounded-3xl p-6 sm:p-10 space-y-12">
            
            {/* 01. GENERAL TERMS */}
            <motion.div
              id="sec-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">01</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">GENERAL TERMS</h3>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] mb-3">
                <span className="text-xs font-bold text-[#1D1D1F] block uppercase tracking-wide">
                  PLEASE READ THE FOLLOWING TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING THIS WEBSITE
                </span>
              </div>

              <p className="text-sm text-[#1D1D1F] leading-relaxed">
                When and upon your accessing to this website and/or when you complete your registration, you immediately and unconditionally agree to the following terms and conditions. If you don't agree to the terms and conditions, don't use this website. Money-Low-Cost LTD company reserves the right to change or terminate at any time the conditions without notice. The provisions relating to Copyrights, Trademark, Disclaimer, Limitation of Liability, Indemnification and Miscellaneous, shall survive any termination.
              </p>
            </motion.div>

            {/* 02. INTELLECTUAL PROPERTY */}
            <motion.div
              id="sec-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">02</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">INTELLECTUAL PROPERTY</h3>
              </div>

              <p className="text-sm text-[#1D1D1F] leading-relaxed">
                All trademarks, services and references on this website are the exclusive property of Money Low Cost LTD company. All rights reserved ©. Any use of the copyrights, trademarks or other intellectual property is prohibited.
              </p>
            </motion.div>

            {/* 03. DISCLAIMER OF WARRANTY */}
            <motion.div
              id="sec-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">03</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">DISCLAIMER OF WARRANTY</h3>
              </div>

              <p className="text-xs font-medium text-[#6E6E73] uppercase tracking-wide leading-relaxed bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E5E7]">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW THE INFORMATION ON THIS WEB SITE IS PROVIDED "AS IS" FOR INFORMATION PURPOSE ONLY. WITHOUT WARRANTIES, CONDITIONS, REPRESENTATIONS OR GUARANTIES OF ANY KIND, EITHER EXPRESSED, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY, TITLE, NONINFRINGEMENT OR FITNESS FOR A PARTICULAR PURPOSE MONEY LOW COST LTD DOES NOT WARRANT THE OPERATION OF ITS OFFERINGS WILL BE UNINTERRUPTED OR ERROR FREE. YOU BEAR THE ENTIRE RISK AS TO THE RESULTS, QUALITY AND PERFORMANCE OF THE SERVICE SHOULD THE SERVICE PROVE DEFECTIVE. THIS DISCLAIMER OF WARRANTY CONSTITUTES AN ESSENTIAL PART OF THE LICENSE AGREEMENT.
              </p>
            </motion.div>

            {/* 04. LIMITATION OF LIABILITY */}
            <motion.div
              id="sec-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">04</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">LIMITATION OF LIABILITY</h3>
              </div>

              <p className="text-xs font-medium text-[#6E6E73] uppercase tracking-wide leading-relaxed bg-[#FFFFFF] p-5 rounded-2xl border border-[#E5E5E7]">
                IN NO EVENT, REGARDLESS OF CAUSE, SHALL Money Low Cost LTD COMPANY BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES OF ANY KIND, WHETHER ARISING UNDER BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY OR OTHERWISE, AND WHETHER BASED ON THIS AGREEMENT OR OTHERWISE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, LOSS OF DATA, LOSS OF PROFITS, LOSS OF ASSIGNMENTS, DATA OR OUTPUT FROM THE SERVICE BEING RENDERED INACCURATE, FAILURE OF Money Low Cost LTD COMPANY SERVICE TO OPERATE WITH ANY OTHER PROGRAMS, SERVER DOWN TIME, DAMAGES FOR LOSS OF GOODWILL, BUSINESS INTERRUPTION, COMPUTER FAILURE OR MALFUNCTION, OR ANY AND ALL OTHER DAMAGES OR LOSSES OF WHATEVER NATURE, EVEN IF Money Low Cost LTD COMPANY HAS BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </motion.div>

            {/* 05. INDEMNIFICATION */}
            <motion.div
              id="sec-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">05</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">INDEMNIFICATION</h3>
              </div>

              <p className="text-sm text-[#1D1D1F] leading-relaxed">
                You agree to indemnify, defend, and hold harmless Money Low Cost LTD company its officers, directors, employees, agents, and suppliers from any third party claims and against all losses, liability, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of these terms and conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the site using your Internet account.
              </p>
            </motion.div>

            {/* 06. LAW AND JURISDICTION */}
            <motion.div
              id="sec-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">06</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">LAW AND JURISDICTION</h3>
              </div>

              <p className="text-sm text-[#1D1D1F] leading-relaxed">
                Your use of this site shall be governed in all respects by the laws of the state of Israel, and/or all of the countries in which the company operates. You agree that jurisdiction over and venue in any legal proceeding directly or indirectly arising out of or relating to this site, shall be in the state ISRAEL according to the law of Israel, court located in Tel Aviv, and/or all of the countries in which the company operates.
              </p>
            </motion.div>

            {/* 07. LINKS TO THIRD PARTY */}
            <motion.div
              id="sec-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">07</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">LINKS TO THIRD PARTY</h3>
              </div>

              <p className="text-sm text-[#1D1D1F] leading-relaxed">
                Money Low Cost LTD company may be linked to third party web sites. Those websites are not under Money Low Cost LTD company control. Money Low Cost LTD company is not responsible for the content or policies in the linked web sites and is not responsible that those websites are not with error or viruses. These linked sites are only for your convenience and therefore you access them at your own risk.
              </p>
            </motion.div>

            {/* 08. CUSTOMER'S ACCOUNT — TERMS AND CONDITIONS */}
            <motion.div
              id="sec-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">08</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">CUSTOMER'S ACCOUNT — TERMS AND CONDITIONS</h3>
              </div>

              <ul className="space-y-3 text-sm text-[#1D1D1F]">
                <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0 mt-2" />
                  <span>The personal account must be used in accordance with MONEY-LOW-COST Company policy, in accordance with the laws of the state and every other state with business relationships with the MONEY-LOW-COST Company.</span>
                </li>
                <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0 mt-2" />
                  <span>It is absolutely forbidden to make any illegal use and/or any prohibited acts that may deceive, violate any law in any country, or to illegally benefit, including by using fictitious names.</span>
                </li>
                <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0 mt-2" />
                  <span>It is absolutely forbidden to make use of an unauthorized personal account, except for the customer who registered and legally identified.</span>
                </li>
                <li className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3] shrink-0 mt-2" />
                  <span>Do not fill any false details into the company's system – in any way and not for ANY PURPOSE.</span>
                </li>
              </ul>
            </motion.div>

            {/* 09. THE COMPANY'S CREDIT POLICY */}
            <motion.div
              id="sec-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">09</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">THE COMPANY'S CREDIT POLICY</h3>
              </div>

              {/* Visual Emphasis Box for Company Stated Policy */}
              <div className="p-4 rounded-2xl bg-[#0071E3]/5 border border-[#0071E3]/20 flex items-start gap-3 mb-2">
                <AlertCircle className="w-5 h-5 text-[#0071E3] shrink-0 mt-0.5" />
                <div className="text-xs text-[#1D1D1F] font-medium leading-relaxed">
                  <span className="font-bold block text-[#0071E3] mb-0.5">Company Official Stated Policy</span>
                  This section contains the official credit terms as established by Money Low Cost LTD in accordance with applicable laws.
                </div>
              </div>

              <div className="space-y-3 text-sm text-[#1D1D1F] leading-relaxed">
                <p>The company provides credit-services to the customers according to law.</p>
                <p>The company reserves the right to sue those who didn't comply with the company's conditions and/or didn't comply with the repayments of payments as they were obligated to pay, or anyone on their behalf in any country in the world, whether in Israel and/or in any other country, according to the law customary in each country.</p>
                <p className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] font-medium">
                  The company will be entitled to claim from the debtors, who have not yet repaid the debt to the company, for the amount of the principal, as well as monthly compound interest of up to <strong className="text-[#0071E3]">TEN PERCENT (10%)</strong> per month (subject to the laws of the country in which the legal process takes place), as well as attorney's fees, as well as all the additional expenses that will occur until the debt is collected in full.
                </p>
              </div>
            </motion.div>

            {/* 10. PRIVACY */}
            <motion.div
              id="sec-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">10</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">PRIVACY</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5E5E7]">
                  <h4 className="text-xs font-bold text-[#0071E3] uppercase tracking-wider mb-2">Information We Collect</h4>
                  <p className="text-xs text-[#1D1D1F] leading-relaxed">
                    We collect all information provided by you as permitted and required by law: when you fill the forms of the registration process for example: name, passport number, ID number, photo, address, phone number, e-mail, beneficiary details, contact details, forms you filled and documents, all the details regarding the transaction with us such as but not limited to: date of transaction, amount, number of times of transaction. We also collect financial information such as bank account. We collect information about you from third party suppliers of information and other government agencies.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5E5E7]">
                  <h4 className="text-xs font-bold text-[#0071E3] uppercase tracking-wider mb-2">How Information Is Collected</h4>
                  <p className="text-xs text-[#1D1D1F] leading-relaxed">
                    We collect information about you using Internet technology.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5E5E7]">
                  <h4 className="text-xs font-bold text-[#0071E3] uppercase tracking-wider mb-2">Information Sharing</h4>
                  <p className="text-xs text-[#1D1D1F] leading-relaxed">
                    We disclose this information with government offices and regulatory and with any third party as permitted and required by law. We disclose information with financial institutions such as but not limited to bank. We disclose information with third party which we have a contractual agreement with in order to perform marketing and advertising.
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5E5E7]">
                  <h4 className="text-xs font-bold text-[#0071E3] uppercase tracking-wider mb-2">Marketing Preferences</h4>
                  <p className="text-xs text-[#1D1D1F] leading-relaxed">
                    You can choose not to receive and not to use information about you, only when it comes to advertising and marketing during registration or by using "contact details".
                  </p>
                </div>

                <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5E5E7]">
                  <h4 className="text-xs font-bold text-[#0071E3] uppercase tracking-wider mb-2">How Information Is Used</h4>
                  <p className="text-xs text-[#1D1D1F] leading-relaxed">
                    We use this information for our business during transaction and other services such as but not limited to marketing and we use this information in any manner we find it right according to what is permitted and required by law.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 11. CHANGES */}
            <motion.div
              id="sec-11"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">11</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">CHANGES</h3>
              </div>

              <p className="text-sm text-[#1D1D1F] leading-relaxed">
                Money Low Cost LTD Company reserves the rights to make changes on this legal page from time to time at any time, without giving an early notice. By using Money Low Cost LTD company website and services you give your consent to those changes. We urge you to view this page when you visit the website and to read the changes.
              </p>
            </motion.div>

            {/* 12. CONTACT DETAILS */}
            <motion.div
              id="sec-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 pt-4 border-t border-[#E5E5E7]"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E7]">
                <span className="text-xs font-bold tracking-widest text-[#0071E3]">12</span>
                <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F]">CONTACT DETAILS</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7]">
                  <span className="text-xs font-semibold text-[#6E6E73] block mb-1">Post Address / Website</span>
                  <a href="https://www.moneylowcost.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-[#0071E3] hover:underline flex items-center gap-1">
                    <span>www.moneylowcost.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7]">
                  <span className="text-xs font-semibold text-[#6E6E73] block mb-1">By Telephone</span>
                  <a href="tel:0542025386" className="text-sm font-bold text-[#0071E3] hover:underline flex items-center gap-1">
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>0542025386</span>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </Container>
    </section>
  );
}
