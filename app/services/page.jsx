import PageTemplate from '@/components/layout/page-template'
    import { getServices } from '@/lib/services'
    import Image from 'next/image'
    
    export default async function ServicesPage() {
      const services = await getServices()
    
      return (
        <PageTemplate title="Our services, what we know best">
          
            {services.map((service) => (
              
                
                  {service.title}
                
                
                  {service.description}
                  
                    {service.longDescription}
                  
                
                
                  <Image
                    src={service.image.url}
                    alt={service.title}
                    width={500}
                    height={300}
                  />
                
                
                  {service.buttonText}
                
              
            ))}
          
        </PageTemplate>
      )
    }
