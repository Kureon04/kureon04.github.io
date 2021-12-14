
public class Book{
    private String title, autor;
    private double price;
    
    public Book(String title, String autor, double price) {
        this.title = title;
        this.autor = autor;
        this.price = price;
    }
    
    public Book() {
        this.title = "";
        this.autor = "";
        this.price = 0.0;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setAutor(String autor) {
        this.autor = autor;
    }
    
    public String getAutor() {
        return autor;
    }
    
    public void setPrice(double price) {
        this.price = price;
    }
    
    public double getPrice() {
        return price;
    }
    
    public void discount(int percentage) {
        if (price > 10) {
            price = price - (price * percentage) / 100;
        }
    }
    
    public String toString(){
        return "Title: " + title + ", Autor: " + autor + ", Price: " + price;
    }
}
