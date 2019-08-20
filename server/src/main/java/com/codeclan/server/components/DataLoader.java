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

        //50s

        Item strat1 = new Item(
                Type.GUITAR,
                "Fender",
                "Stratocaster",
                8935,
                1956,
                Decade.FIFTIES,
                25000,
                "This is an original 1956 Fender Stratocaster, fiesta red finish, one-piece maple neck, in mint " +
                        "condition with all original parts."
        );
        itemRepository.save(strat1);

        Item strat2 = new Item(
                Type.GUITAR,
                "Fender",
                "Stratocaster",
                8936,
                1954,
                Decade.FIFTIES,
                22500,
                "The definitive electric guitar, this is an original 1954 Fender Stratocaster, two-color-sunburst " +
                        "finish, one-piece maple neck, in " +
                        "mint condition with all original parts."
        );
        itemRepository.save(strat2);

        Item lesPaul = new Item(
                Type.GUITAR,
                "Gibson",
                "Les Paul",
                8136,
                1959,
                Decade.FIFTIES,
                99000,
                "Described as the peak of Gibson's production, the 1959 Les Paul is often considered the holy grail " +
                        "of electric guitars. Only a handful remain, and they are in extremely high demand. All " +
                        "original parts, near-mint condition, sunburst finish."
        );
        itemRepository.save(lesPaul);

        Item twinReverb = new Item(
                Type.AMPLIFIER,
                "Fender",
                "Twin Reverb",
                4457,
                1955,
                Decade.FIFTIES,
                23000,
                "An all-original 1955 Fender Twin Reverb, preserved in great condition and still producing the rich " +
                        "shimmer of these legendary amps."
        );
        itemRepository.save(twinReverb);

        Item jazzBass = new Item(
                Type.BASS,
                "Fender",
                "Jazz Bass",
                8046,
                1958,
                Decade.FIFTIES,
                16500,
                "An all-original 1958 Jazz Bass, butterscotch blonde finish, one-piece maple neck and maintained to " +
                        "near-mint condition."
        );
        itemRepository.save(jazzBass);

        Item PBass = new Item(
                Type.BASS,
                "Fender",
                "Precision Bass",
                8036,
                1959,
                Decade.FIFTIES,
                16500,
                "An all-original 1959 Precision Bass, two-color-sunburst finish, one-piece maple neck and maintained " +
                        "to " +
                        "near-mint condition."
        );
        itemRepository.save(PBass);

        Item la2a = new Item(
                Type.STUDIO,
                "Teletronix",
                "LA2A",
                1738,
                1955,
                Decade.FIFTIES,
                9000,
                "An iconic piece of studio gear, the Teletronix LA2A has likely been used on every recording you've " +
                        "every heard. All original parts and near-mint condition means this unit can still deliver " +
                        "the ward harmonic saturation that earned the LA2A its reputation."
        );
        itemRepository.save(la2a);

        Item sslG = new Item(
                Type.STUDIO,
                "Solid State Logic",
                "G-Series",
                1788,
                1958,
                Decade.FIFTIES,
                275000,
                "The SSL G-Series analog mixing console is nothing short of legendary. Used to record some of the " +
                        "most iconic music of the 20th century, and complete with its infamous mix bus compressor, " +
                        "the SSL G is a titan in the history of western music."
        );
        itemRepository.save(sslG);

        //60s

        Item bigMuff = new Item(
                Type.PEDAL,
                "Electro Harmonix",
                "Big Muff",
                9254,
                1969,
                Decade.SIXTIES,
                200,
                "The Big Muff is the most successful, and arguably still is the most well-known, of the " +
                        "Electro-Harmonix family. Extensively used throughout the 1960s and 1970s, by players such as" +
                        "Jimi Hendrix and David Gilmour."
        );
        itemRepository.save(bigMuff);

        //70s

        Item sm7 = new Item(Type.MICROPHONE,
                "Shure",
                "SM7",
                1054,
                1973,
                Decade.SEVENTIES,
                850,
                "The big brother to the SM57, the SM7 id the go-to microphone for producers and engineers all over " +
                        "the world, as its rugged build and versatility allow it to be used on everything from kick " +
                        "drums and trumpets, to amplifier cabinets and - most famously on Michael Jackson records - " +
                        "vocals."
        );
        itemRepository.save(sm7);

        Item isa110 = new Item(
                Type.STUDIO,
                "Focusrite",
                "ISA 110",
                2961,
                1978,
                Decade.SEVENTIES,
                3000,
                "The ISA 110, with its instantly recognizable blue and yellow colorings, is as common in recording " +
                        "studios as the Fender Strat and SM57 microphone. This original unit, complete with Lundahl " +
                        "transformers and mic preamps, is as classic as they get."
        );
        itemRepository.save(isa110);

        Item juno60 = new Item(
                Type.SYNTHESIZER,
                "Roland",
                "Juno 60",
                5015,
                1978,
                Decade.SEVENTIES,
                3300,
                "The first mass-produced polyphonic analog synthesizer, the Juno 60 went on to define its er. With " +
                        "its thick pads and cutting leads, the factory patches on the Juno 60 are as instantly " +
                        "familiar as the chime of a Fender Strat or Twang of a Telecaster."
        );
        itemRepository.save(juno60);

        //80s

        Item superOverdrive = new Item(
                Type.PEDAL,
                "Boss",
                "Super Overdrive",
                4729,
                1982,
                Decade.EIGHTIES,
                150,
                "Released in 1982, the SD-1 Super Overdrive was originally BOSS's answer the the popular Ibanez Tube " +
                        "Screamer, although it quickly gained an identity all its own. Used by rock royalty such as " +
                        "Eddie Van Halen, Zakk Wylde and Eric Johnson, the Super Overdrive can easily adapt to any " +
                        "style."
        );
        itemRepository.save(superOverdrive);

        Item jcm800 = new Item(
                Type.AMPLIFIER,
                "Marshall",
                "JCM 800",
                4557,
                1987,
                Decade.EIGHTIES,
                1100,
                "The first twin-channel Marshall head, the JCM800 became popular with many hard-rock and metal " +
                        "guitarists of the 1980s for its hi-gain potential. These included Zakk Wylde, Mick Mars, " +
                        "Slash and Metallica."
        );
        itemRepository.save(jcm800);

        Item dx7 = new Item(Type.SYNTHESIZER,
                "Yamaha",
                "DX7",
                2019,
                1988,
                Decade.EIGHTIES,
                4000,
                "The first mass-produced FM synthesizer, the Yamaha DX7 went on to be one of the biggest-selling and " +
                        "widely used synths ever made. Its stock patches became famous overnight, and its sparkly, " +
                        "crystal-like keys sounds were extensively used in pop, soul and dance records of the era."
        );
        itemRepository.save(dx7);

        Item stratPlus = new Item(Type.SYNTHESIZER,
                "Fender",
                "Strat Plus Deluxe",
                2119,
                1988,
                Decade.EIGHTIES,
                4000,
                "Instantly recognizable for its smooth lace sensor pickups and still roller nut, the 1988 Strat Plus " +
                        "Deluxe found high-profile players in Pete Townshend and Mark Knopfler. With its striking " +
                        "Torino red finish, this Strat stands out in the crowd."
        );
        itemRepository.save(stratPlus);
    }
}


