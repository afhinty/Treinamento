#include <stdio.h>
#include <locale.h>
#include <string.h>
#include <stdlib.h>

struct Registro {
    char email[50];
    char senha[30];
};

int main() {
    setlocale(LC_ALL, "portuguese");

    FILE *f;
    f = fopen("registro", "a+");
    if (f == NULL) {
        printf("Erro na abertura do arquivo!");
        system("pause");
        exit(1);
    }

    struct Registro registro[100];
    int i = 0;
    int escolha;

    char emailExclusao[50]; 
    int encontrado = 0; 
    FILE *tempFile = NULL; 

    do {
        printf("\n M E N U \n");
        printf("1 - Incluir\n");
        printf("2 - Excluir\n");
        printf("3 - Relatório\n");
        printf("4 - Sair\n");

        printf("Escolha uma opção: ");
        scanf("%d", &escolha);

        switch (escolha) {
            case 1:
                printf("Digite o email para o registro: ");
                scanf("%s", registro[i].email);
                printf("Digite a senha para o registro: ");
                scanf("%s", registro[i].senha);
                fprintf(f, "Email: %s, Senha: %s\n", registro[i].email, registro[i].senha);
                i++;
                break;

            case 2:
                printf("Digite o email do registro que deseja excluir: ");
                scanf("%s", emailExclusao);

                encontrado = 0;

                tempFile = fopen("temp_registro", "w");

                if (tempFile == NULL) {
                    printf("Erro na abertura do arquivo temporário!");
                    exit(1);
                }

                for (int j = 0; j < i; j++) {
                    if (strcmp(registro[j].email, emailExclusao) == 0) {
                        encontrado = 1;
                    } else {
                        fprintf(tempFile, "Email: %s, Senha: %s\n", registro[j].email, registro[j].senha);
                    }
                }

                fclose(tempFile);

                if (encontrado) {
                    remove("registro.txt");
                    rename("temp_registro.txt", "registro.txt");
                    printf("Registro excluído com sucesso.\n");
                } else {
                    printf("Registro não encontrado.\n");
                }
                break;

            case 3:
                printf("Relatório de Registros:\n");
                for (int j = 0; j < i; j++) {
                    if (registro[j].email[0] != '\0') {
                        printf("Email: %s, Senha: %s\n", registro[j].email, registro[j].senha);
                    }
                }
                break;

            case 4:
                printf("ENCERRANDO...\n");
                break;

            default:
                printf("Selecione uma opção válida!\n");
        }

    } while (escolha != 4);

    if (tempFile != NULL) {
        fclose(tempFile);
    }
    fclose(f);
    return 0;
}

