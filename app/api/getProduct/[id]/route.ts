import products from '@/data/products.json'

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);

  console.log('Requested product ID:', id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return new Response(JSON.stringify({ error: 'Product not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify(product), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}