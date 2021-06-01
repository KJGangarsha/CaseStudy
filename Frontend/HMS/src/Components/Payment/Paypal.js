import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import swal from 'sweetalert';

function Paypal() {
  const paypal = useRef();
  const history = useHistory();

  //console.log(localStorage.getItem("billAmount"));

  const paypalRendered = useRef(false);

  const paypalComponent = () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "For Room checkout",
                amount: {
                  currency_code: "USD",
                  value: localStorage.getItem("billAmount"),
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          if (order.status === "COMPLETED") {
            history.push("/checkOutView");
            swal({
              title: "Payment Done",            
              icon: "success",
            });
          }
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  };

  useEffect(() => {
    if (!paypalRendered.current) {
      paypalComponent();
      paypalRendered.current = true;
    }
    //eslint-disable-next-line
  }, []);

  const paywithcash = () => {
    history.push("/checkOutView");
  };

  return (
    <div>
      <div
        ref={paypal}
        style={{ marginTop: "150px", textAlign: "center" }}
      ></div>
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <button
          className="btn btn-success alert alert-success"
          onClick={paywithcash}
        >
          <b>Pay with cash</b>
        </button>
      </div>
    </div>
  );
}

export default withRouter(Paypal);