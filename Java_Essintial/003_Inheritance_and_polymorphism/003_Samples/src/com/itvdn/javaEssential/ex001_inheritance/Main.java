package com.itvdn.javaEssential.ex001_inheritance;

/**
 * Наследование.
 * <p>
 * Наследование — механизм объектно-ориентированного программирования, позволяющий описать новый (производный) класс
 * на основе уже существующего (базового),
 * при этом свойства и функциональность базового класса заимствуются новым производным классом.
 * <p>
 * Базовый класс             -                Производный  класс
 * Супер класс               -                Подкласс или (сабкласс)
 * Родительский класс        -                Дочерний класс
 * Родитель                  -                Потомок
 */
public class Main {
    public static void main(String[] args) {
        DerivedClass instance = new DerivedClass();
        System.out.println(instance.publicField);
        System.out.println(instance.protectedField);
    }
}
