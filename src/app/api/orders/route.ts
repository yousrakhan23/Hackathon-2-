import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client'; // Adjust the import based on your setup

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cartItems, userDetails, paymentMethod, totalAmount } = body;

    // Save the order to Sanity or your database
    const order = {
      _type: 'order',
      userDetails,
      cartItems,
      paymentMethod,
      totalAmount,
      status: 'pending', // Initial status
      createdAt: new Date().toISOString(),
    };

    // Save to Sanity
    const createdOrder = await client.create(order);

    return NextResponse.json({ success: true, order: createdOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}