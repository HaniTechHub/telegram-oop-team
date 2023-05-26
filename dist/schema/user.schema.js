"use strict";
// import { z } from "zod";
// import { check, body, checkSchema } from "express-validator";
// // export const createUserSchema = object({
// //   body: object({
// //     username: string({ required_error: "Name is required" }),
// //     password: string({ required_error: "Password is required" })
// //   }),
// // });
// // export const loginUserSchema = object({
// //   body: object({
// //     email: string({ required_error: "Email is required" }).email(
// //       "Invalid email or password"
// //     ),
// //     password: string({ required_error: "Password is required" }).min(
// //       8,
// //       "Invalid email or password"
// //     ),
// //   }),
// // });
// export const createUserSchema = z.object({
//   body: z.object({
//     username: z.string().nonempty("Username is required"),
//     password: z.string().nonempty("Password is required"),
//   }),
// });
