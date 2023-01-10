console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java 67 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Deserializer<List<Inner>>"
 , "c2" : "org.apache.kafka.common.serialization.ListDeserializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.ListDeserializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#58"
 , "c1" : "ListDeserializer"
 , "c2" : "ListDeserializer()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#70"
 , "c1" : "Deserializer<Inner>"
 , "c2" : "innerDeserializer()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#75"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#84"
 , "c1" : "void"
 , "c2" : "configureListClass(Map<String,?>;boolean)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#104"
 , "c1" : "void"
 , "c2" : "configureInnerSerde(Map<String,?>;boolean)"
 , "c3" : "6"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00126"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#126"
 , "c1" : "List<Inner>"
 , "c2" : "createListInstance(int)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00143"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#143"
 , "c1" : "SerializationStrategy"
 , "c2" : "parseSerializationStrategyFlag(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#150"
 , "c1" : "List<Integer>"
 , "c2" : "deserializeNullIndexList(DataInputStream)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00161"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#161"
 , "c1" : "List<Inner>"
 , "c2" : "deserialize(String;byte[])"
 , "c3" : "6"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#195"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "14"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "38"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.serialization.ListDeserializer the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.serialization.ListDeserializer the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.serialization.ListDeserializer the MagicNumber/String  'Could not construct ListDeserializer as not all required parameters were present -- listClass: {}, inner: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.serialization.ListDeserializer the MagicNumber/String  'ListDeserializer requires both \'listClass\' and \'innerDeserializer\' parameters to be provided during initialization' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#75"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00075] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.serialization.ListDeserializer.configure@POLYN176925 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.common.serialization.ListDeserializer.configure@POLYN176925 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.common.serialization.ListDeserializer.configure@POLYN176925 the MagicNumber/String  'Could not configure ListDeserializer as some parameters were already set -- listClass: {}, inner: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.common.serialization.ListDeserializer.configure@POLYN176925 the MagicNumber/String  'List deserializer was already initialized using a non-default constructor' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00084] For method configureListClass arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#84"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00084] For method configureListClass list of called methods Object monObjet|V configs_getN177795"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#84"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00084] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.common.serialization.ListDeserializer.configureListClass@POLYN177526 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.common.serialization.ListDeserializer.configureListClass@POLYN177526 the MagicNumber/String  'Not able to determine the list class because it was neither passed via the constructor nor set in the config.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.serialization.ListDeserializer.configureListClass@POLYN177526 the MagicNumber/String  'Could not determine the list class instance using \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#96"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00096] In method org.apache.kafka.common.serialization.ListDeserializer.configureListClass@POLYN177526 the MagicNumber/String  '\' property.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.serialization.ListDeserializer.configureListClass@POLYN177526 the MagicNumber/String  'Deserializer's list class \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.common.serialization.ListDeserializer.configureListClass@POLYN177526 the MagicNumber/String  '\' could not be found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00104] For method configureInnerSerde arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00104] For method configureInnerSerde list of called methods Object monObjet|V configs_getN179059"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#107"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00107] In method org.apache.kafka.common.serialization.ListDeserializer.configureInnerSerde@POLYN178790 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.common.serialization.ListDeserializer.configureInnerSerde@POLYN178790 the MagicNumber/String  'Not able to determine the inner serde class because it was neither passed via the constructor nor set in the config.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.serialization.ListDeserializer.configureInnerSerde@POLYN178790 the MagicNumber/String  'Could not determine the inner serde class instance using \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.common.serialization.ListDeserializer.configureInnerSerde@POLYN178790 the MagicNumber/String  '\' property.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.serialization.ListDeserializer.configureInnerSerde@POLYN178790 the MagicNumber/String  'Deserializer's inner serde class \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.common.serialization.ListDeserializer.configureInnerSerde@POLYN178790 the MagicNumber/String  '\' could not be found.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#126"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00126] For method createListInstance arguments int  listSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.common.serialization.ListDeserializer.createListInstance@POLYN180434 the MagicNumber/String  'Failed to construct list due to ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.serialization.ListDeserializer.createListInstance@POLYN180434 the MagicNumber/String  'Could not construct a list instance of \'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00139] In method org.apache.kafka.common.serialization.ListDeserializer.createListInstance@POLYN180434 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#143"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00143] For method parseSerializationStrategyFlag arguments int  serializationStrategyFlag"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.common.serialization.ListDeserializer.parseSerializationStrategyFlag@POLYN181442 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.common.serialization.ListDeserializer.parseSerializationStrategyFlag@POLYN181442 the MagicNumber/String  'Invalid serialization strategy flag value' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method deserializeNullIndexList arguments DataInputStream  dis"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00150] For method deserializeNullIndexList list of called methods Object monObjet|int dis_readIntN181944"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#150"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00150] The argument dis is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00153"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00153] In method org.apache.kafka.common.serialization.ListDeserializer.deserializeNullIndexList@POLYN181832 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#161"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00161] For method deserialize arguments String  topic|byte[]  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  'Ran out of bytes in serialized list' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  'Deserialized list so far: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  'End of the stream was reached prematurely' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String  'Unable to deserialize into a List' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.common.serialization.ListDeserializer.close@POLYN184692 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.serialization.ListDeserializer.createListInstance@POLYN180434"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.createListInstance@POLYN180434 the MagicNumber/String 'Failed to construct list due to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.createListInstance@POLYN180434 the MagicNumber/String 'Could not construct a list instance of \'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#139"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00139] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.createListInstance@POLYN180434 the MagicNumber/String '\'' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#162"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00162] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#167"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00167] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#174"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00174] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#182"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00182] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String 'Ran out of bytes in serialized list' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String 'Deserialized list so far: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String 'End of the stream was reached prematurely' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.common.serialization.ListDeserializer.deserialize@POLYN182393 the MagicNumber/String 'Unable to deserialize into a List' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/ListDeserializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
