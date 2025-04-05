import { getOrderById } from "@/lib/actions/order.action";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import OrderDetailsTable from "./order-details-table";
import { ShippingAddress } from "@/types";

export const metadata: Metadata = {
  title: "Order Details",
};

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const order = await getOrderById(id);
  if (!order) return notFound();

  return (
    // <>
    //   Oder {process.env.PAYPAL_CLIENT_ID}
    //   <div>
    //     <pre>{JSON.stringify(order, null, 2)}</pre>
    //   </div>
    // </>
    <OrderDetailsTable
      order={{
        ...order,
        shippingAddress: order.shippingAddress as ShippingAddress,
      }}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || "sb"}
    />
  );
};

export default OrderDetailsPage;
