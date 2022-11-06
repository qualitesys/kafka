console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java 28 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KTableProcessorSupplier<KIn,VIn,KIn,VOut>"
 , "c2" : "org.apache.kafka.streams.kstream.internals.KTableMapValues"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.internals.KTableMapValues" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00020"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#20"
 , "c1" : "KTableMapValues"
 , "c2" : "KTableMapValues(KTableImpl<KIn,?,VIn>;ValueMapperWithKey<?superKIn,?superVIn,?extendsVOut>;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#29"
 , "c1" : "Processor<KIn,Change<VIn>,KIn,Change<VOut>>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#34"
 , "c1" : "KTableValueGetterSupplier<KIn,VOut>"
 , "c2" : "view()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#56"
 , "c1" : "boolean"
 , "c2" : "enableSendingOldValues(boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#69"
 , "c1" : "VOut"
 , "c2" : "computeValue(KIn;VIn)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#79"
 , "c1" : "ValueAndTimestamp<VOut>"
 , "c2" : "computeValueAndTimestamp(KIn;ValueAndTimestamp<VIn>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00014] The class KTableMapValues contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.view@POLYN164107 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method enableSendingOldValues arguments boolean  forceMaterialization"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.enableSendingOldValues@POLYN164873 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.enableSendingOldValues@POLYN164873 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.enableSendingOldValues@POLYN164873 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.enableSendingOldValues@POLYN164873 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method computeValue arguments KIn  key|VIn  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.computeValue@POLYN165298 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.computeValue@POLYN165298 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00079"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#79"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00079] For method computeValueAndTimestamp arguments KIn  key|ValueAndTimestamp&lt;VIn &gt;  valueAndTimestamp"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.computeValueAndTimestamp@POLYN165706 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.computeValueAndTimestamp@POLYN165706 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.computeValueAndTimestamp@POLYN165706 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00092] The class KTableMapValuesProcessor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#98"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00098] For method init arguments ProcessorContext&lt;KIn ,Change&lt;VOut &gt; &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#98"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00098] The argument context is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.KTableMapValuesProcessor.init@POLYN166741 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00111] For method process arguments Record&lt;KIn ,Change&lt;VIn &gt; &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#111"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00111] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.KTableMapValuesProcessor.process@POLYN167328 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#123"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00123] For method computeOldValue arguments KIn  key|Change&lt;VIn &gt;  change"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#123"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00123] The argument change is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.KTableMapValuesProcessor.computeOldValue@POLYN168427 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method org.apache.kafka.streams.kstream.internals.KTableMapValues.KTableMapValuesProcessor.computeOldValue@POLYN168427 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00135] The class KTableMapValuesValueGetter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method init arguments ProcessorContext&lt;? ,? &gt;  context"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00148"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.html#148"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00148] For method get arguments KIn  key"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/internals/KTableMapValues.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
