// API utility functions with TypeScript types

/**
 * Response interface for newsletter subscription
 */
export interface SubscriptionResponse {
  success: boolean;
  message: string;
}

/**
 * Subscribe a user to the newsletter
 * @param {string} email - User email to subscribe
 * @returns {Promise<SubscriptionResponse>} - Response from subscription API
 */
export const subscribeNewsletter = async (email: string): Promise<SubscriptionResponse> => {
  // This is a mock implementation - would normally call an API endpoint
  console.log(`Subscribing ${email} to newsletter`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Successfully subscribed to newsletter!' });
    }, 500);
  });
};
