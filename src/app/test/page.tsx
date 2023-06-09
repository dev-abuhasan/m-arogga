"use client";

import { fetchUsers, increment } from "@/services/redux/slices/user-slices";
import { AppDispatch, RootState } from "@/services/redux/store";
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
    const userRef = useRef(false);

    const { entities, loading, value } = useSelector(
        (state: RootState) => state.user
    );

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (userRef.current === false) {
            dispatch(fetchUsers());
        }

        return () => {
            userRef.current = true;
        };
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                entities?.map((user: any) => <h3 key={user.id}>{user.name}</h3>)
            )}

            <button onClick={() => dispatch(increment())}>Click on me</button>
            {value}
        </div>
    );
}