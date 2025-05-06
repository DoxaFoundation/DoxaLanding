import { useState, useEffect } from "react";
import { getAllEmails, getSubscriberCount } from "../services/emailService";

export default function EmailAdmin() {
  const [emails, setEmails] = useState<string[]>([]);
  const [subscriberCount, setSubscriberCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch emails and subscriber count in parallel
        const [emailsList, count] = await Promise.all([
          getAllEmails(),
          getSubscriberCount(),
        ]);

        setEmails(emailsList);
        setSubscriberCount(count);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch email data"
        );
        console.error("Error fetching email data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-white/5 rounded-lg border border-white/10">
      <h2 className="text-2xl font-bold mb-4">Email Subscribers</h2>

      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin h-8 w-8 border-4 border-white/20 rounded-full border-t-white"></div>
        </div>
      ) : error ? (
        <div className="text-red-400 p-4 rounded-lg bg-red-900/20">
          <p>Error: {error}</p>
        </div>
      ) : (
        <>
          <div className="mb-4 p-4 rounded-lg bg-white/5">
            <p className="text-lg">
              Total Subscribers:{" "}
              <span className="font-bold">{subscriberCount}</span>
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Subscriber List</h3>
            {emails.length === 0 ? (
              <p className="text-gray-400">No subscribers yet.</p>
            ) : (
              <div className="max-h-96 overflow-y-auto">
                <table className="w-full">
                  <thead className="border-b border-white/10">
                    <tr>
                      <th className="py-2 px-4 text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emails.map((email, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="py-2 px-4">{email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
