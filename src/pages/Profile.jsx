import { useEffect, useState } from "react";
import { getProfileApi } from "../api/auth.api";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfileApi();
        setProfile(res.data.profile); 
      } catch (error) {
        console.error("Profile fetch error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <p className="text-center">Loading profile...</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-3xl">
      <h2 className="text-2xl font-bold mb-4">Profile Information</h2>

      <div className="space-y-3">
        <p>
          <span className="font-semibold">Name:</span> {profile?.name}
        </p>
        <p>
          <span className="font-semibold">Email:</span> {profile?.email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {profile?.phone}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {profile?.address}
        </p>
      </div>
    </div>
  );
};

export default Profile;
