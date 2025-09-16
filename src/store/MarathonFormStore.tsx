import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
   fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
  total: 0,
  haveCoupon: false,
  couponCode: "",
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setEmail: (_email) =>
    set(() => ({
      email: _email,
    })),
  // Function ชื่อ discountCupon คำนวณ total ตรงนี้
  setPassword: (_password) =>
    set(() => ({
      password: _password,
    })),
  setConfirmPassword: (_confirmpassword) =>
    set(() => ({
      confirmPassword: _confirmpassword,
    })),
  setHaveCoupon: (_havecoupon) =>
    set(() => ({
      haveCoupon: _havecoupon,
    })),
  computeTotalPayment: () =>
    set((state) => {
      let totalpayment = 0;
      if (state.plan === "funrun") totalpayment += 500;
      if (state.plan === "mini") totalpayment += 800;
      if (state.plan === "half") totalpayment += 1200;
      if (state.plan === "full") totalpayment += 1500;

      if(state.couponCode === "CMU2025") totalpayment *= 0.7;

      return { total: totalpayment};
    }),
  setCouponCode: (_couponCode) =>
    set(() => ({
      couponCode: _couponCode,
    })),
  reset: () =>
    set({
      fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  email: "",
  password: "",
  confirmPassword: "",
  total: 0,
  haveCoupon: false,
  couponCode: "",
    }),
}));