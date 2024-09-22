import React from "react";

interface RoadmapItemProps {
  title: string;
  features: string[];
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, features }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="list-disc ml-6">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

interface RoadmapData {
  phase: string;
  title: string;
  features: string[];
}

const roadmapData: RoadmapData[] = [
  {
    phase: "Phase 1",
    title: "Phase 1: Current MVP",
    features: [
      "User Authentication (JWT-based)",
      "WebSocket-based Real-time Messaging",
      "Multiple Chat Rooms",
      "Message Persistence (PostgreSQL)",
      "Concurrency Handling (Worker pool, goroutines)",
      "Redis for session management",
      "Message History (Last 50 messages)",
    ],
  },
  {
    phase: "Phase 2",
    title: "Phase 2: 3 Months",
    features: [
      "User Profile Management",
      "Message Reactions (Emojis)",
      "Typing Indicators",
      "Read Receipts",
      "Push Notifications",
      "Room Management Features",
      "User Statuses (Online/Offline)",
      "Search & Filter for Messages",
      "Loading and Error States",
    ],
  },
  {
    phase: "Phase 3",
    title: "Phase 3: 6 Months",
    features: [
      "Group Chats",
      "Private Messaging",
      "Video and Voice Messaging",
      "End-to-End Encryption (E2EE)",
      "Admin Panel for Moderation",
      "Chat Analytics",
      "File Sharing",
      "Progressive Web App (PWA) Support",
      "OAuth 2.0 Integration",
    ],
  },
  {
    phase: "Phase 4",
    title: "Phase 4: 9-12 Months",
    features: [
      "Monetization Features (Freemium, In-app Purchases)",
      "Multi-Tenant Support",
      "Advanced Video Conferencing",
      "AI-Powered Chat Features (Smart Reply, AI Moderation)",
      "Performance Optimization (Scaling with Kubernetes)",
      "Multi-Language Support",
      "Advanced Analytics for Businesses",
    ],
  },
  {
    phase: "Phase 5",
    title: "Phase 5: 12+ Months",
    features: [
      "Enterprise-Grade Features (SSO, LDAP)",
      "Custom Chatbots",
      "White-Labeling",
      "Advanced Security (Zero-Trust, 2FA)",
      "Global Scaling (Deploy to multiple regions)",
      "Custom Business Workflows",
    ],
  },
];

const RoadmapPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Roadmap</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        {roadmapData.map((item, index) => (
          <RoadmapItem
            key={index}
            title={item.title}
            features={item.features}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapPage;
