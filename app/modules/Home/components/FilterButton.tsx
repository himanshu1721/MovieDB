import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Images from "../../../assets/images";
import styles from "../styles/FilterButtonStyles";

interface Value {
  id: number;
  name: string;
}

interface FilterButtonProps {
  elements: any;
  value: string;
  onSelect: (arg0: string) => void;
}

const FilterButton = ({
  elements,
  value,
  onSelect = () => {},
}: FilterButtonProps): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const onSelectedItem = (val: string): void => {
    setOpen(false);
    onSelect(val);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{value}</Text>
        <View style={styles.containerBetweenTextAndIcon} />
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Image style={styles.arrowStyles} source={Images.expandArrow} />
        </TouchableOpacity>
      </View>
      {open && (
        <View style={styles.dropdown}>
          {elements.map((val: Value, i: number) => {
            if (value !== val.name) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onSelectedItem(val.name, setOpen, onSelect);
                  }}
                  activeOpacity={0.6}
                  key={String(i)}
                >
                  <Text style={styles.filterOptionsTextStyle}>{val.name}</Text>
                </TouchableOpacity>
              );
            }
          })}
        </View>
      )}
    </View>
  );
};

export default FilterButton;
