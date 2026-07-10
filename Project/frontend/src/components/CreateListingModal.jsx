import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Select, MenuItem, InputLabel, FormControl, Grid, FormControlLabel, Checkbox } from '@mui/material';
import * as foodListingService from '../services/foodListingService';
import * as categoryService from '../services/categoryService';
import * as imageService from '../services/imageService';

export default function CreateListingModal({ open, onClose, onSuccess }) {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [qty, setQty] = useState('');
  const [origPrice, setOrigPrice] = useState('');
  const [discPrice, setDiscPrice] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('DISCOUNT_SALE');
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [expiry, setExpiry] = useState('');
  const [pickupStart, setPickupStart] = useState('');
  const [pickupEnd, setPickupEnd] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      loadCategories();
    }
  }, [open]);

  async function loadCategories() {
    try {
      const res = await categoryService.getCategories();
      setCategories(res || []);
      if (res && res.length > 0) {
        setCategory(res[0].id);
      }
    } catch (e) {
      console.error(e);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      // Mock Upload if image url isn't provided directly, or construct image list
      let finalImages = [];
      if (imageUrl) {
        finalImages.push({
          imageUrl,
          cloudinaryPublicId: 'mock-id-' + Math.random().toString(36).substring(2),
          sortOrder: 0
        });
      } else {
        // Fallback mock image upload
        const mockImg = await imageService.uploadImage(null);
        finalImages.push({
          imageUrl: mockImg.url,
          cloudinaryPublicId: mockImg.public_id,
          sortOrder: 0
        });
      }

      const formatToLocalISO = (dateStr) => {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        const offset = d.getTimezoneOffset() * 60000;
        return new Date(d.getTime() - offset).toISOString().slice(0, 19);
      };

      const listingData = {
        categoryId: category,
        name,
        description,
        quantity: parseInt(qty),
        originalPrice: origPrice ? parseFloat(origPrice) : null,
        discountPrice: discPrice ? parseFloat(discPrice) : null,
        listingType: type,
        vegetarian,
        vegan,
        expiryTime: formatToLocalISO(expiry),
        pickupStartTime: formatToLocalISO(pickupStart),
        pickupEndTime: formatToLocalISO(pickupEnd),
        images: finalImages
      };

      await foodListingService.createFoodListing(listingData);
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      alert('Error creating listing: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onClose={onClose} PaperProps={{ sx: { backgroundColor: '#181d1c', border: '1px solid rgba(255,255,255,0.1)' } }}>
      <DialogTitle sx={{ fontWeight: 'bold' }}>Create Food Listing</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Food Title / Name" required value={name} onChange={(e) => setName(e.target.value)} size="small" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" required multiline rows={2} value={description} onChange={(e) => setDescription(e.target.value)} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Total Quantity" type="number" required value={qty} onChange={(e) => setQty(e.target.value)} size="small" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="listing-type-modal-label">Type</InputLabel>
                <Select labelId="listing-type-modal-label" label="Type" value={type} onChange={(e) => setType(e.target.value)}>
                  <MenuItem value="DISCOUNT_SALE">Discount Sale</MenuItem>
                  <MenuItem value="FREE_DONATION">Free Donation</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {type === 'DISCOUNT_SALE' && (
              <>
                <Grid item xs={6}>
                  <TextField fullWidth label="Original Price ($)" type="number" required value={origPrice} onChange={(e) => setOrigPrice(e.target.value)} size="small" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Discount Price ($)" type="number" required value={discPrice} onChange={(e) => setDiscPrice(e.target.value)} size="small" />
                </Grid>
              </>
            )}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="category-modal-label">Category</InputLabel>
                <Select labelId="category-modal-label" label="Category" value={category} onChange={(e) => setCategory(e.target.value)}>
                  {categories.map((c) => (
                    <MenuItem key={c.id} value={c.id}>{c.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Image URL (Optional)" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} size="small" placeholder="Or mock-uploaded by default" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Expiry Time" type="datetime-local" InputLabelProps={{ shrink: true }} required value={expiry} onChange={(e) => setExpiry(e.target.value)} size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Pickup Start" type="datetime-local" InputLabelProps={{ shrink: true }} required value={pickupStart} onChange={(e) => setPickupStart(e.target.value)} size="small" />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Pickup End" type="datetime-local" InputLabelProps={{ shrink: true }} required value={pickupEnd} onChange={(e) => setPickupEnd(e.target.value)} size="small" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel control={<Checkbox checked={vegetarian} onChange={(e) => setVegetarian(e.target.checked)} />} label="Vegetarian" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel control={<Checkbox checked={vegan} onChange={(e) => setVegan(e.target.checked)} />} label="Vegan" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={loading}>{loading ? 'Creating...' : 'Create Listing'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
