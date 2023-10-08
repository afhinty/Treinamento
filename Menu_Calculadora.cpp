#include <stdio.h>
#include <locale.h>
#include <windows.h>
#include <stdlib.h>

int main() {
	setlocale(LC_ALL, "pt_BR.UTF-8");
	
    int escolha;
    int a, b;
    int resultado;

    do {
        system("cls");

        printf("------------ M E N U ------------\n\n");
        printf("____________1. Adição____________\n");
        printf("___________2. Subtração__________\n");
        printf("_________3. Multiplicação________\n");
        printf("____________4. Divisão___________\n");
        printf("_____________5. Sair_____________\n\n");

        printf("Escolha uma opção: ");
        scanf("%d", &escolha);

        switch (escolha) {
            case 1:
                system("cls");
                printf("Você escolheu a opção Adição.\n");
                system("pause");
                printf("Digite um número: ");
                scanf("%d", &a);
                printf("Digite outro número: ");
                scanf("%d", &b);
                resultado = a + b;
                printf("O resultado da soma é: %d\n", resultado);
                system("pause");
                break;

            case 2:
                system("cls");
                printf("Você escolheu a opção Subtração.\n");
                system("pause");
                printf("Digite um número: ");
                scanf("%d", &a);
                printf("Digite outro número: ");
                scanf("%d", &b);
                resultado = a - b;
                printf("O resultado da subtração é: %d\n", resultado);
                system("pause");
                break;

            case 3:
                system("cls");
                printf("Você escolheu a opção Multiplicação.\n");
                system("pause");
                printf("Digite um número: ");
                scanf("%d", &a);
                printf("Digite outro número: ");
                scanf("%d", &b);
                resultado = a * b;
                printf("O resultado da multiplicação é: %d\n", resultado);
                system("pause");
                break;

            case 4:
                system("cls");
                printf("Você escolheu a opção Divisão.\n");
                system("pause");
                printf("Digite um número: ");
                scanf("%d", &a);
                printf("Digite outro número: ");
                scanf("%d", &b);
                if (b != 0) {
                    resultado = a / b;
                    printf("O resultado da divisão é: %d\n", resultado);
                    system("pause");
                } else {
                    printf("Erro: Divisão por zero.\n");
                    system("pause");
                }
                break;

            case 5:
                printf("        ENCERRANDO...\n");
                system("pause");
                break;

            default:
                printf("Selecione uma opção válida!\n");
                system("pause");
        }
    } while (escolha != 5);

    return 0;
}
