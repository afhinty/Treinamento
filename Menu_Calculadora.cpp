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
        printf("____________1. Adi��o____________\n");
        printf("___________2. Subtra��o__________\n");
        printf("_________3. Multiplica��o________\n");
        printf("____________4. Divis�o___________\n");
        printf("_____________5. Sair_____________\n\n");

        printf("Escolha uma op��o: ");
        scanf("%d", &escolha);

        switch (escolha) {
            case 1:
                system("cls");
                printf("Voc� escolheu a op��o Adi��o.\n");
                system("pause");
                printf("Digite um n�mero: ");
                scanf("%d", &a);
                printf("Digite outro n�mero: ");
                scanf("%d", &b);
                resultado = a + b;
                printf("O resultado da soma �: %d\n", resultado);
                system("pause");
                break;

            case 2:
                system("cls");
                printf("Voc� escolheu a op��o Subtra��o.\n");
                system("pause");
                printf("Digite um n�mero: ");
                scanf("%d", &a);
                printf("Digite outro n�mero: ");
                scanf("%d", &b);
                resultado = a - b;
                printf("O resultado da subtra��o �: %d\n", resultado);
                system("pause");
                break;

            case 3:
                system("cls");
                printf("Voc� escolheu a op��o Multiplica��o.\n");
                system("pause");
                printf("Digite um n�mero: ");
                scanf("%d", &a);
                printf("Digite outro n�mero: ");
                scanf("%d", &b);
                resultado = a * b;
                printf("O resultado da multiplica��o �: %d\n", resultado);
                system("pause");
                break;

            case 4:
                system("cls");
                printf("Voc� escolheu a op��o Divis�o.\n");
                system("pause");
                printf("Digite um n�mero: ");
                scanf("%d", &a);
                printf("Digite outro n�mero: ");
                scanf("%d", &b);
                if (b != 0) {
                    resultado = a / b;
                    printf("O resultado da divis�o �: %d\n", resultado);
                    system("pause");
                } else {
                    printf("Erro: Divis�o por zero.\n");
                    system("pause");
                }
                break;

            case 5:
                printf("        ENCERRANDO...\n");
                system("pause");
                break;

            default:
                printf("Selecione uma op��o v�lida!\n");
                system("pause");
        }
    } while (escolha != 5);

    return 0;
}
