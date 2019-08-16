package com.codeclan.server.components;

import com.codeclan.server.enums.Decade;
import com.codeclan.server.enums.Type;
import com.codeclan.server.models.Item;
import com.codeclan.server.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ItemRepository itemRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Item stratocaster = new Item(
                Type.GUITAR,
                "Fender",
                "Stratocaster",
                8935,
                1956,
                Decade.FIFTIES,
                25000,
                "This is an original 1956 Fender Stratocaster, in mint condition with all original parts."
        );
        itemRepository.save(stratocaster);

        Item superOverdrive = new Item(
                Type.PEDAL,
                "Boss",
                "Super Overdrive",
                4729,
                1982,
                Decade.EIGHTIES,
                150,
                "This is sample text"
        );
        itemRepository.save(superOverdrive);

        Item jcm800 = new Item(
                Type.AMPLIFIER,
                "Marshall",
                "JCM800",
                4557,
                1987,
                Decade.EIGHTIES,
                1100,
                "This is sample text"
        );
        itemRepository.save(jcm800);

        Item juno60 = new Item(
                Type.SYNTHESIZER,
                "Roland",
                "Juno60",
                5015,
                1978,
                Decade.SEVENTIES,
                3000,
                "This is sample text"
        );
        itemRepository.save(juno60);

        Item dx7 = new Item(Type.SYNTHESIZER,
                "Yamaha",
                "DX7",
                2019,
                1988,
                Decade.EIGHTIES,
                4000,
                "This is sample text"
        );
        itemRepository.save(dx7);

        Item bigMuff = new Item(
                Type.PEDAL,
                "Electro Harmonix",
                "Big Muff",
                9254,
                1969,
                Decade.SIXTIES,
                200,
                "This is sample text"
        );
        itemRepository.save(bigMuff);

        Item sm7 = new Item(Type.MICROPHONE,
                "Shure",
                "SM7",
                1054,
                1973,
                Decade.SEVENTIES,
                350,
                "This is sample text"
        );
        itemRepository.save(sm7);

        Item jazzBass = new Item(
                Type.BASS,
                "Fender",
                "Jazz Bass",
                8046,
                1958,
                Decade.FIFTIES,
                20000,
                "This is sample text"
        );
        itemRepository.save(jazzBass);

        Item la2a = new Item(
                Type.STUDIO,
                "Teletronix",
                "LA2A",
                1738,
                1955,
                Decade.FIFTIES,
                12000,
                "This is sample text"
        );
        itemRepository.save(la2a);

        Item isa110 = new Item(
                Type.STUDIO,
                "Focusrite",
                "ISA110",
                2961,
                1978,
                Decade.SEVENTIES,
                3000,
                "This is sample text"
        );
        itemRepository.save(isa110);
    }
}


