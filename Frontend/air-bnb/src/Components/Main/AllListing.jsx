import HouseCard from "../Main/HouseCard";

export default function AllListing() {
  return (
    <div className="min-h-screen">
      <div
        className="
        text-3xl
        font-semibold
        pl-25
        pt-8
        pb-4
      "
      >
        All Listings
      </div>

      <HouseCard />
    </div>
  );
}
