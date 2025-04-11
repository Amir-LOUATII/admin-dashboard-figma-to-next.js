import eyeIcon from "@/assets/icons/eyeIcon.svg";
import paymentIcon from "@/assets/icons/paymentsIcon.svg";
import payoutsIcon from "@/assets/icons/payoutsIcon.svg";
import balancesIcon from "@/assets/icons/balancesIcon.svg";
import customersIcon from "@/assets/icons/customersIcon.svg";
import referralsIcon from "@/assets/icons/referralsIcon.svg";
import settingsIcon from "@/assets/icons/settingsIcon.svg";
import subscriptionsIcon from "@/assets/icons/subscriptionsIcon.svg";
import transactionsIcon from "@/assets/icons/transactionIcon.svg";
export const links = [
  {
    sectionTitle: "payment",
    children: [
      { label: "transactions", href: "/", icon: transactionsIcon },
      { label: "customers", href: "/", icon: customersIcon },
      { label: "payouts", href: "/", icon: payoutsIcon },
      { label: "balances", href: "/", icon: balancesIcon },
      { label: "subscriptions", href: "/", icon: subscriptionsIcon },
      { label: "payment plans", href: "/", icon: paymentIcon },
    ],
  },
  { sectionTitle: "commerce", children: [] },
  { label: "referrals", href: "/", icon: referralsIcon },
  { label: "audit logs", href: "/", icon: eyeIcon },
  { label: "settings", href: "/", icon: settingsIcon },
];
