import { FC } from "react";
import { Clock, Location, Phone } from "@/components/common/icons";
import ContactDetail from "./ContactDetail";

const DetailSection: FC = () => {
  return (
    <>
      <ContactDetail
        icon={Location}
        title="Address"
        desc={
          <p className="w-1/2">236 5th SE Avenue, New York NY10000, United States</p>
        }
      />
      <ContactDetail
        icon={Phone}
        title="Phone"
        desc={
          <>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </>
        }
      />
      <ContactDetail
        icon={Clock}
        title="Working Time"
        desc={
          <>
            <p>Monday-Friday: 9:00 - 22:00</p>
            <p>Saturday-Sunday: 9:00 - 21:00</p>
          </>
        }
      />
    </>
  );
}

export default DetailSection;