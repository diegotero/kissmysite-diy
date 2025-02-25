import { Header } from '@/components/layout/header'
    import { Footer } from '@/components/layout/footer'
    import { Button } from '@/components/ui/button'
    
    export default function PageTemplate({ title, children }) {
      return (
        
          
            <Header />
            
              
                <h1 className="text-3xl font-bold mb-4">{title}</h1>
                
                  <Button >Button 1</Button>
                  <Button >Button 2</Button>
                
              
            
            
              {children}
            
            <Footer />
          
        
      )
    }
