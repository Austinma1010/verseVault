const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

export const getSingleVerse = async (verse) => {
      try {
        const myVerse = await fetch(`https://bible-api.com/${verse}`, requestOptions);

        if (!myVerse) {
            return console.log("Couldn't Find Verse");
        }

        return myVerse;
      } catch (err) {
        console.error(err);
      }
};

export const getVerseRange = async (verse) => {
    try {
      const myVerse = await fetch(`https://bible-api.com/${verse}`, requestOptions);

      if (!myVerse) {
          return console.log("Couldn't Find Verse");
      }

      return myVerse;
    } catch (err) {
      console.error(err);
    }
};