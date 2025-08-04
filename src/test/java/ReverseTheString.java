import java.lang.String;
import java.util.Scanner;
public class ReverseTheString {
    public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);
String name = scanner.nextLine();
for(int i = name.length()-1;i>=0;i--){
  char reverse = name.charAt(i);
    System.out.printf(String.valueOf(reverse));

}
    }
}
