import apiClient from './apiClient';

export async function createListing(payload) {
  const { data } = await apiClient.post('/food-listings', payload);
  return data;
}

export async function updateListing(listingId, payload) {
  const { data } = await apiClient.put(`/food-listings/${listingId}`, payload);
  return data;
}

export async function deleteListing(listingId) {
  const { data } = await apiClient.delete(`/food-listings/${listingId}`);
  return data;
}

export async function getMyListings(page = 0, size = 20) {
  const { data } = await apiClient.get('/food-listings/me', {
    params: { page, size },
  });
  return data;
}

export async function getListingById(listingId) {
  const { data } = await apiClient.get(`/food-listings/${listingId}`);
  return data;
}

export async function searchListings({
  categoryId,
  type,
  vegetarian,
  vegan,
  keyword,
  latitude,
  longitude,
  radius,
  page = 0,
  size = 20,
} = {}) {
  const { data } = await apiClient.get('/food-listings', {
    params: {
      categoryId,
      type,
      vegetarian,
      vegan,
      keyword,
      latitude,
      longitude,
      radius,
      page,
      size,
    },
  });
  return data;
}
