import PageTemplate from '@/components/layout/page-template'
import { getServices } from '@/lib/services'
import Image from 'next/image'

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <PageTemplate title="Our services, what we know best">
      <div>
        {services.map((service) => (
          <div key={service.id}>
            <div>
              {service.title}
            </div>
            <div>
              {service.description}
              <div>
                {service.longDescription}
              </div>
            </div>
            <div>
              <Image
                src={service.image.url}
                alt={service.title}
                width={500}
                height={300}
              />
            </div>
            <div>
              {service.buttonText}
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  )
}
