import express, { Request, Response } from "express";
import { Address } from "../models/address.interface";

export const router = express.Router();

let userAddresses: Address[] = new Array();

router.post("/users/:id/addresses", async (req: Request, res: Response) => {
  try {
    let data = req.body;

    const userAddress: Address = data;

     let newAddresses = [...userAddresses];
     newAddresses.push(userAddress);

     userAddresses = newAddresses;

    res.status(201).json(userAddress);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get("/users/:userId/addresses", async (req: Request, res: Response) => {
  try {
    let userId = parseInt(req.params.userId);

    let filteredAddresses = userAddresses.filter((userAddress)=>{
      return userAddress.userId === userId;
    })

    res.status(201).json(filteredAddresses);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put("/users/:userId/addresses", async (req: Request, res: Response) => {
  try {
      let userId = parseInt(req.params.userId);
      let data = req.body;
     let updatedAddresses = userAddresses.map((userAddress)=>{
      if (userAddress.userId === userId) {
        return data;
      }
      else {
        return userAddress;
      }});

    res.status(200).json(updatedAddresses);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.delete("/users/:userId/addresses", async (req: Request, res: Response) => {
  try {
     let userId = parseInt(req.params.userId);
     let updatedAddresses = userAddresses.filter((userAddress)=>{
      return userAddress.userId !==userId;
    })

    res.status(201).json(updatedAddresses);
  } catch (error) {
    res.status(400).json(error);
  }
});
