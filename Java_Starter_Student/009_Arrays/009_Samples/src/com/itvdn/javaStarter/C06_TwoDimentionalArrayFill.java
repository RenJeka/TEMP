package com.itvdn.javaStarter;

public class C06_TwoDimentionalArrayFill {
    // Массивы (двумерный массив).

    public static void main(String[] args) {
        int sizeI = 5;
        int sizeJ = 25;
        int[][] array = new int[sizeI][sizeJ];

        // Заполнение массива
        for (int i = 0; i < sizeI; i++) {
            for (int j = 0; j < sizeJ; j++) {
                array[i][j] = i * j + 1;
            }
        }

        for (int i = 0; i < sizeI; i++) {
            for (int j = 0; j < sizeJ; j++) {
                System.out.print(" " + array[i][j]);
            }
            System.out.print("\n");
        }
    }
}
