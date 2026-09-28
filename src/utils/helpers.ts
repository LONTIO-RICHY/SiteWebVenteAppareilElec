import { Currency, CREATOR_INFO, Product, CartItem, CheckoutForm } from '../types/index.ts';

// Exchange rates relative to XAF (FCFA)
const RATES: Record<Currency, number> = {
  XAF: 1,
  EUR: 1 / 655.957,
  USD: 1 / 610.0,
};

export function formatPrice(amountXAF: number, currency: Currency = 'XAF'): string {
  if (currency === 'XAF') {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XOF', // used for standard FCFA display formatting
      maximumFractionDigits: 0,
    }).format(amountXAF).replace('XOF', 'FCFA');
  }

  if (currency === 'EUR') {
    const val = amountXAF * RATES.EUR;
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  }

  const val = amountXAF * RATES.USD;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(val);
}

/**
 * Creates direct WhatsApp order link for a single item
 */
export function getProductWhatsAppLink(product: Product, currency: Currency = 'XAF'): string {
  const priceFormatted = formatPrice(product.priceXAF, currency);
  const text = `Bonjour M. ${CREATOR_INFO.name},

Je suis intéressé(e) par l'article suivant sur votre boutique en ligne :
- Produit : ${product.name}
- Référence : ${product.id}
- Prix catalogue : ${priceFormatted}
- Catégorie : ${product.category}

Pouvez-vous me confirmer la disponibilité et les modalités de livraison ?

Merci d'avance !`;

  return `https://wa.me/${CREATOR_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Creates direct WhatsApp order link for the entire shopping cart
 */
export function getCartWhatsAppLink(
  items: CartItem[],
  totalXAF: number,
  currency: Currency = 'XAF',
  formData?: Partial<CheckoutForm>
): string {
  const itemsText = items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.product.name} (x${item.quantity}) - ${formatPrice(item.product.priceXAF * item.quantity, currency)}`
    )
    .join('\n');

  let text = `Bonjour M. ${CREATOR_INFO.name},

Je souhaite passer commande pour les articles suivants :
${itemsText}

Total de la commande : ${formatPrice(totalXAF, currency)}`;

  if (formData && formData.fullName) {
    text += `\n\nInformations de livraison :
- Client : ${formData.fullName}
- Téléphone : ${formData.phone}
- Email : ${formData.email || 'Non renseigné'}
- Ville : ${formData.city}
- Adresse : ${formData.address}
- Mode de paiement souhaité : ${formatPaymentMethod(formData.paymentMethod)}`;

    if (formData.notes) {
      text += `\n- Instructions : ${formData.notes}`;
    }
  }

  text += `\n\nMerci de me confirmer la prise en charge de ma commande.`;

  return `https://wa.me/${CREATOR_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function formatPaymentMethod(method?: string): string {
  switch (method) {
    case 'orange_money':
      return 'Orange Money Cameroun';
    case 'mtn_momo':
      return 'MTN Mobile Money Cameroun';
    case 'cash_delivery':
      return 'Paiement en espèces à la livraison';
    case 'card':
      return 'Carte Bancaire (Visa / Mastercard)';
    default:
      return 'À convenir sur WhatsApp';
  }
}
