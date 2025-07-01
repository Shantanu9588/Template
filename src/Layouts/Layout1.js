import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import AccountDetails from "../View/CRM/Accounts/AccountDetails";

const breadcrumbsItems = [
  { label: "CRM", href: "#" },
  { label: "Account", href: "#" },
  { label: "Account Details" },
];

const ContentWrapper = ({ children }) => {
  return (
    <main>
       {children}
    </main>
  )
}

export default function Layout1() {
  return (
    <>
      <div className="min-h-screen bg-grey-100">
        <Header />
        <header className="bg-white flex items-center px-4 py-3 h-[62px] border border-blue-900-10">
          <Breadcrumbs items={breadcrumbsItems} />
        </header>

        <ContentWrapper>
            <AccountDetails />
        </ContentWrapper>
      </div>
    </>
  );
}
