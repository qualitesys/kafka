console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java 28 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "NamedOperation<Consumed<K,V>>"
 , "c2" : "org.apache.kafka.streams.kstream.Consumed"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.Consumed" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "Consumed"
 , "c2" : "Consumed(Serde<K>;Serde<V>;TimestampExtractor;Topology.AutoOffsetReset;String)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Consumed"
 , "c2" : "Consumed(Consumed<K,V>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Consumed<K,V>"
 , "c2" : "withKeySerde(Serde<K>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Consumed<K,V>"
 , "c2" : "withValueSerde(Serde<V>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Consumed<K,V>"
 , "c2" : "withTimestampExtractor(TimestampExtractor)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Consumed<K,V>"
 , "c2" : "withOffsetResetPolicy(Topology.AutoOffsetReset)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Consumed<K,V>"
 , "c2" : "withName(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00012"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class Consumed contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument consumed is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.kstream.Consumed the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method withKeySerde arguments Serde&lt;K &gt;  keySerde"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method withValueSerde arguments Serde&lt;V &gt;  valueSerde"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method withTimestampExtractor arguments TimestampExtractor  timestampExtractor"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#91"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00091] For method withOffsetResetPolicy arguments Topology.AutoOffsetReset  resetPolicy"
}} 
,
{ "ligne" : {
   "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method withName arguments String  processorName"
}} 
,
{ "ligne" : {
   "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00108] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.kstream.Consumed.equals@POLYN208546 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.streams.kstream.Consumed.equals@POLYN208546 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/Consumed.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.streams.kstream.Consumed.equals@POLYN208546 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
