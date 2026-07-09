import apiClient from './apiClient';

export async function createPaymentIntent(orderId) {
  const { data } = await apiClient.post(`/payments/create-intent/${orderId}`);
  return data;
}
