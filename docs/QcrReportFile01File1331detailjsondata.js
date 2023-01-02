console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java 49 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.image.ClientQuotasImage"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.image.ClientQuotasImage" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#58"
 , "c1" : "ClientQuotasImage"
 , "c2" : "ClientQuotasImage(Map<ClientQuotaEntity,ClientQuotaImage>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#62"
 , "c1" : "boolean"
 , "c2" : "isEmpty()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#66"
 , "c1" : "Map<ClientQuotaEntity,ClientQuotaImage>"
 , "c2" : "entities()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#70"
 , "c1" : "void"
 , "c2" : "write(Consumer<List<ApiMessageAndVersion>>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#78"
 , "c1" : "DescribeClientQuotasResponseData"
 , "c2" : "describe(DescribeClientQuotasRequestData)"
 , "c3" : "16"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00140"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#140"
 , "c1" : "boolean"
 , "c2" : "matches(ClientQuotaEntity;Map<String,String>;Set<String>;boolean)"
 , "c3" : "8"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00165"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#165"
 , "c1" : "EntryData"
 , "c2" : "toDescribeEntry(ClientQuotaEntity;ClientQuotaImage)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00178"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#178"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00185"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#185"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00190"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#190"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "28"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00070] For method write arguments Consumer&lt;List&lt;ApiMessageAndVersion &gt; &gt;  out"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00072] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00073] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method describe arguments DescribeClientQuotasRequestData  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#78"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00078] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00090] The same method call component.entityType()component.entityType() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00090] The same method call component.entityType() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00131"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00131] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00132] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Invalid empty entity type.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Entity type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  ' cannot appear more than once in the filter.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Unsupported entity type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Request specified ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'MATCH_TYPE_EXACT, but set match string to null.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Request specified ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'MATCH_TYPE_DEFAULT, but also specified a match string.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00108] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00111"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00111] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Request specified ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00113] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'MATCH_TYPE_SPECIFIED, but also specified a match string.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Unknown match type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'Invalid entity filter component ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'combination. IP filter component should not be used with ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00126"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.image.ClientQuotasImage.describe@POLYN174155 the MagicNumber/String  'user or clientId filter component.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#140"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00140] For method matches arguments ClientQuotaEntity  entity|Map&lt;String ,String &gt;  exactMatch|Set&lt;String &gt;  typeMatch|boolean  strict"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#140"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00140] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00141"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#141"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00141] The argument exactMatch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00142"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#142"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00142] The argument typeMatch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.image.ClientQuotasImage.matches@POLYN178033 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00151"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00151] In method org.apache.kafka.image.ClientQuotasImage.matches@POLYN178033 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.image.ClientQuotasImage.matches@POLYN178033 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.image.ClientQuotasImage.matches@POLYN178033 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.image.ClientQuotasImage.matches@POLYN178033 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#165"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00165] For method toDescribeEntry arguments ClientQuotaEntity  entity|ClientQuotaImage  quotaImage"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#165"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00165] The argument entity is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00166"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#166"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00166] The argument quotaImage is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#178"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00178] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.image.ClientQuotasImage.equals@POLYN180035 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.image.ClientQuotasImage.toString@POLYN180533 the MagicNumber/String  'ClientQuotasImage(entities=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.image.ClientQuotasImage.toString@POLYN180533 the MagicNumber/String  ':' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.image.ClientQuotasImage.toString@POLYN180533 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.image.ClientQuotasImage.toString@POLYN180533 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.ClientQuotasImage.equals@POLYN180035"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.ClientQuotasImage.isEmpty@POLYN173449"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.image.ClientQuotasImage.toDescribeEntry@POLYN179341"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00179"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00179] In the recursive method org.apache.kafka.image.ClientQuotasImage.equals@POLYN180035 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/image/ClientQuotasImage.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
