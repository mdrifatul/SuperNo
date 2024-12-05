import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Order = () => {
  const { data: orders = [] } = useQuery({
    queryKey: ["contest"],
    queryFn: async () => {
      const res = await axios.get(`/order.json`);
      return res.data?.user;
    },
  });
  console.log(orders);

  return (
    <div className="">
      <table className="table table-zebra mt-14">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order =>(<tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={order?.img} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>{order?.title}</td>
            <td>$ {order?.price}</td>
            <td>{order?.date}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
