#include <iostream>

int main()
{
    using std::cout;
    int i = 1, sum = 0;
    while (i < 1000)
    {
        if (i % 3 == 0 || i % 5 == 0) {
            sum+=i;
        }
        i++;
    }
    cout<<sum;
    return 0;
}