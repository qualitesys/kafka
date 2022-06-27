console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java 84 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "SegmentedBytesStore"
 , "c2" : "org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AbstractRocksDBSegmentedBytesStore"
 , "c2" : "AbstractRocksDBSegmentedBytesStore(String;String;KeySchema;AbstractSegments<S>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "backwardFetch(Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;long;long;boolean)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "backwardFetch(Bytes;Bytes;long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetch(Bytes;Bytes;long;long;boolean)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "all()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "backwardAll()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "fetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "backwardFetchAll(long;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(Bytes)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "remove(Bytes;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "put(Bytes;byte[])"
 , "c3" : "3"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "get(Bytes)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(ProcessorContext;StateStore)"
 , "c3" : "1"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "init(StateStoreContext;StateStore)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "persistent()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isOpen()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<S>"
 , "c2" : "getSegments()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "restoreAllInternal(Collection<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Map<S,WriteBatch>"
 , "c2" : "getWriteBatches(Collection<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "Position"
 , "c2" : "getPosition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "61"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "16"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00034] The class AbstractRocksDBSegmentedBytesStore contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method fetch arguments Bytes  key|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN213034 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method backwardFetch arguments Bytes  key|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetch@POLYN213357 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method fetch arguments Bytes  key|long  from|long  to|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN214624 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method backwardFetch arguments Bytes  keyFrom|Bytes  keyTo|long  from|long  to"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetch@POLYN214997 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method fetch arguments Bytes  keyFrom|Bytes  keyTo|long  from|long  to|boolean  forward"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00113"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  'Returning empty iterator for fetch with invalid key range: from &amp;gt; to. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  'This may be due to range arguments set in the wrong order, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  'or serdes that don't preserve ordering when lexicographically comparing the serialized bytes. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  'Note that the built-in numerical serdes do not follow this for negative numbers' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00124"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetch@POLYN215351 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00140"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00142] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.all@POLYN216887 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00153"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardAll@POLYN217457 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method fetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00161"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetchAll@POLYN218027 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetchAll@POLYN218027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetchAll@POLYN218027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetchAll@POLYN218027 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetchAll@POLYN218027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetchAll@POLYN218027 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.fetchAll@POLYN218027 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method backwardFetchAll arguments long  timeFrom|long  timeTo"
}} 
,
{ "ligne" : {
   "c1" : "00174"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetchAll@POLYN218684 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetchAll@POLYN218684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetchAll@POLYN218684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetchAll@POLYN218684 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetchAll@POLYN218684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetchAll@POLYN218684 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.backwardFetchAll@POLYN218684 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00185"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#185"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00185] For method remove arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.remove@POLYN219290 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#196"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00196] For method remove arguments Bytes  key|long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.remove@POLYN219844 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00205"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method put arguments Bytes  key|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.put@POLYN220341 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.put@POLYN220341 the MagicNumber/String  1.0d should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.put@POLYN220341 the MagicNumber/String  'Skipping record for expired segment.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method get arguments Bytes  key"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.get@POLYN221413 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.get@POLYN221413 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method init arguments ProcessorContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00236"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#236"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00236] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00252"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.init@POLYN221932 the MagicNumber/String  '.position' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.init@POLYN221932 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.init@POLYN221932 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#272"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00272] For method init arguments StateStoreContext  context|StateStore  root"
}} 
,
{ "ligne" : {
   "c1" : "00284"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.close@POLYN223882 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.persistent@POLYN224053 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00300] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.getSegments@POLYN224257 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method restoreAllInternal arguments Collection&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00308] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00309"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00309] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.restoreAllInternal@POLYN224371 the MagicNumber/String  'Error restoring batch to store ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#319"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00319] For method getWriteBatches arguments Collection&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  records"
}} 
,
{ "ligne" : {
   "c1" : "00330"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00330] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00338] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00340"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00340] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00331"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00331] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.getWriteBatches@POLYN225301 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/AbstractRocksDBSegmentedBytesStore.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.streams.state.internals.AbstractRocksDBSegmentedBytesStore.getWriteBatches@POLYN225301 the MagicNumber/String  'Error restoring batch to store ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
