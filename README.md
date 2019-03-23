# tsaitsaichuang.github.io

//第7、8行為錯誤寫法，不可輸入一個整數N並直接以它作為陣列大小	
#include <iostream>
using namespace std;

int main(){
	int N, D;
	cin >> N >> D; 
	int Array_number[N][2 * D] = {};
	int Array_percentage[N] = {};
	int line, percent, flag = 0;
	
	for(line = 0; line < N ; line++){  
		for(int j = 0; j < 2 * D; j++){ 
			if(j % 2 == 0){
				cin >> Array_number[line][j];
			}
			else{
				cin >> Array_number[line][j];
				flag = 1;
			}
			if(flag == 1){
				if(Array_number[line][j] - Array_number[line][j - 1] < 8){
					Array_percentage[line] += 1; 	
			    }
			flag = 0;			    
			}
		}
	}
	for(int k = 0; k < line; k++){
		percent = Array_percentage[k] * 100/ D;
		cout <<  percent << endl;
	}
	return 0;
} 
